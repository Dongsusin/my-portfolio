import { useState, useEffect, useRef } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./Memo.css";

function Memo() {
  const [notes, setNotes] = useState([]);
  const [currentNoteId, setCurrentNoteId] = useState(null);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("list");
  const [userId, setUserId] = useState(null);
  const saveTimeout = useRef(null);

  // 로그인 사용자 감지
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        setNotes([]);
      }
    });
    return () => unsubscribe();
  }, []);

  // Firestore에서 메모 불러오기
  useEffect(() => {
    if (!userId) return;

    const q = query(
      collection(db, "users", userId, "memos"),
      orderBy("updatedAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const memoList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(memoList);
    });

    return () => unsubscribe();
  }, [userId]);

  // 메모 선택
  function handleSelectNote(id) {
    const note = notes.find((n) => n.id === id);
    if (note) {
      setCurrentNoteId(id);
      setInput(note.content);
      setMode("edit");
    }
  }

  // 새 메모 작성
  function handleAddNote() {
    setCurrentNoteId(null);
    setInput("");
    setMode("edit");
  }

  // 메모 저장
  async function handleSave() {
    if (!userId || input.trim() === "") return;

    if (currentNoteId === null) {
      await addDoc(collection(db, "users", userId, "memos"), {
        content: input,
        updatedAt: Date.now(),
      });
    } else {
      const ref = doc(db, "users", userId, "memos", currentNoteId);
      await updateDoc(ref, {
        content: input,
        updatedAt: Date.now(),
      });
    }

    setInput("");
    setCurrentNoteId(null);
    setMode("list");
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleCancel() {
    setMode("list");
  }

  async function handleDelete(id) {
    if (!userId) return;
    await deleteDoc(doc(db, "users", userId, "memos", id));
    if (id === currentNoteId) {
      setCurrentNoteId(null);
      setInput("");
    }
  }

  if (!userId) {
    return (
      <div className="memo-app">
        <div className="memo-sidebar">
          <p>로그인 후 메모를 사용할 수 있습니다.</p>
        </div>
      </div>
    );
  }

  if (mode === "list") {
    return (
      <div className="memo-app">
        <div className="memo-sidebar">
          <button onClick={handleAddNote} className="add-note-btn">
            메모 작성
          </button>
          <ul className="note-list">
            {notes.map((note) => (
              <li key={note.id} className="note-list-item">
                <div
                  onClick={() => handleSelectNote(note.id)}
                  className="note-title"
                >
                  {note.content.slice(0, 20) || "빈 메모"}
                </div>
                <button
                  className="delete-note-btn"
                  onClick={() => handleDelete(note.id)}
                  title="삭제"
                >
                  ×
                </button>
              </li>
            ))}
            {notes.length === 0 && <li>저장된 메모가 없습니다.</li>}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="memo-app">
      <div className="memo-edit">
        <textarea
          className="memo-input"
          value={input}
          onChange={handleInputChange}
          placeholder="메모를 입력하세요..."
          autoFocus
        />
        <div className="memo-footer">
          <span>글자 수: {input.length}</span>
          <div>
            <button onClick={handleCancel}>취소</button>
            <button onClick={handleSave} disabled={input.trim() === ""}>
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memo;
