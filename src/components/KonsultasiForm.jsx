import { useState } from "react";

const pertanyaan = [
  { key: "C1", text: "Dapat menirukan kalimat sederhana" },
  { key: "C2", text: "Dapat meniru kembali 4-5 urutan kata" },
  { key: "C3", text: "Mengulangi kalimat yang sudah didengarnya" },
  { key: "C4", text: "Menyanyikan lagu anak-anak lebih dari 20 lagu" },
  { key: "C5", text: "Dapat menyebutkan simbol huruf vokal dan konsonan" },
  { key: "C6", text: "Mengucapkan syair lagu sambil diiringi senandung" },
  { key: "C7", text: "Dapat mengelompokkan benda menurut fungsinya" },
  { key: "C8", text: "Meniru berbagai lambang huruf vokal dan konsonan" },
  { key: "C9", text: "Mengelompokkan benda menurut fungsinya (peralatan makan, mandi, kebersihan)" },
  { key: "C10", text: "Dapat menggunakan dan menjawab pertanyaan (apa, mengapa, dimana, berapa, bagaimana)" },
  { key: "C11", text: "Bercerita tentang gambar yang disediakan atau dibuat sendiri" },
  { key: "C12", text: "Bercerita menggunakan kata ganti aku, saya, kamu, mereka, dll" },
  { key: "C13", text: "Menceritakan pengalaman/kejadian secara sederhana" },
  { key: "C14", text: "Memberikan keterangan/informasi tentang suatu hal" },
  { key: "C15", text: "Dapat menyebutkan urutan bilangan 1-10" },
  { key: "C16", text: "Dapat menunjuk lambang bilangan 1-10" },
  { key: "C17", text: "Meniru lambang bilangan 1-10" },
  { key: "C18", text: "Mengenal lambang bilangan 1-20" },
  { key: "C19", text: "Membedakan dan membuat dua kumpulan benda berdasarkan kuantitasnya" },
  { key: "C20", text: "Mengenal perbedaan benda berdasarkan bentuknya" },
  { key: "C21", text: "Mencoba dan menceritakan tentang proses pencampuran warna" },
  { key: "C22", text: "Mencoba dan menceritakan tentang proses benda dimasukkan ke air (terapung, melayang, tenggelam)" },
  { key: "C23", text: "Menceritakan macam-macam bunyi" },
  { key: "C24", text: "Menceritakan macam-macam rasa" },
  { key: "C25", text: "Menceritakan macam-macam bau" },];

export default function KonsultasiForm() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (key, value) => {
    setAnswers({ ...answers, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/konsultasi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ facts: answers }),
    });
    const data = await res.json();
    setResult(data.hasil);
  };

  return (
    <div className="my-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        {pertanyaan.map((p) => (
          <div key={p.key} className="flex items-center space-x-4">
            <label className="flex-1">{p.text}</label>
            <input
              type="checkbox"
              checked={answers[p.key] || false}
              onChange={(e) => handleChange(p.key, e.target.checked)}
              className="w-4 h-4"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Lihat Hasil
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Hasil Rekomendasi Bakat:</h2>
          {result.length === 0 ? (
            <p>Tidak ada bakat terdeteksi.</p>
          ) : (
            <ul className="list-disc ml-5">
              {result.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
