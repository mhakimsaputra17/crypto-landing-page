# Crypto Landing Page

Landing page cryptocurrency modern dan responsif yang dibangun dengan React, TypeScript, Vite, dan Tailwind CSS v4.

## 🚀 Fitur Utama

- **Desain Modern**: UI yang bersih dan profesional dengan efek glassmorphism
- **Layout Responsif**: Dioptimalkan untuk desktop, tablet, dan perangkat mobile
- **TypeScript**: Type safety penuh dan developer experience yang baik
- **Tailwind CSS v4**: Versi terbaru dengan fitur CSS modern
- **Fast Development**: Didukung oleh Vite untuk HMR yang sangat cepat
- **Component-Based**: Komponen React yang modular dan dapat digunakan kembali
- **Accessible**: Dibangun dengan praktik terbaik aksesibilitas

## 🛠️ Tech Stack

- **React 19.1** - UI library
- **TypeScript 5.8** - Type safety
- **Vite 7.0** - Build tool
- **Tailwind CSS v4.1** - Styling dengan theme variables terbaru
- **Lucide React** - Icons yang beautiful
- **pnpm** - Package manager yang cepat

## 📁 Struktur Project

```
src/
├── components/           # Komponen UI yang dapat digunakan kembali
│   ├── Header.tsx       # Header navigasi dengan logo PNG
│   ├── MarketSection.tsx # Section overview market crypto
│   ├── FavoritesSection.tsx # Tabel data trading favorit
│   ├── PriceCard.tsx    # Card untuk menampilkan harga crypto
│   └── index.ts         # Export komponen
├── types/               # Definisi TypeScript types
│   └── index.ts         # Export types
├── App.tsx              # Komponen aplikasi utama
├── main.tsx             # Entry point aplikasi
└── index.css            # Global styles (import Tailwind)

public/
└── images/              # Folder untuk aset gambar
    └── crypto-logo.png  # Logo PNG (perlu ditambahkan)
```

## 🚀 Memulai Project

### Prasyarat

- Node.js 18+
- pnpm (direkomendasikan) atau npm

### Instalasi

1. Clone repository ini

```bash
git clone https://github.com/mhakimsaputra17/crypto-landing-page.git
cd crypto-landing-page
```

2. Install dependencies

```bash
pnpm install
```

3. **Tambahkan logo crypto Anda**

   - Simpan file PNG logo sebagai `crypto-logo.png`
   - Letakkan di folder: `public/images/crypto-logo.png`
   - Ukuran yang direkomendasikan: 44x44 pixels

4. Jalankan development server

```bash
pnpm dev
```

5. Buka browser ke `http://localhost:5173`

### Script yang Tersedia

- `pnpm dev` - Menjalankan development server
- `pnpm build` - Build untuk production
- `pnpm preview` - Preview build production
- `pnpm lint` - Menjalankan ESLint

## 🎨 Fitur Desain

### Komponen Utama

- **Header**: Navigasi responsif dengan menu mobile dan logo PNG
- **MarketSection**: Card harga cryptocurrency dengan mini charts
- **FavoritesSection**: Tabel data trading yang komprehensif dengan tabs
- **PriceCard**: Tampilan harga crypto individual dengan indikator trend

### Desain Responsif

- **Desktop**: Layout tabel lengkap dengan semua kolom data
- **Tablet**: Tabel yang dikondensasi dengan informasi penting
- **Mobile**: Layout berbasis card untuk pengalaman mobile yang optimal

### Styling dengan Tailwind CSS v4

- **Dark Theme**: Skema warna dark yang profesional
- **Glassmorphism**: Efek kaca modern dengan backdrop blur
- **Smooth Animations**: Transisi dan hover effects yang halus
- **Theme Variables**: Menggunakan fitur `@theme` terbaru dari Tailwind CSS v4

## 🔧 Kustomisasi

### Menambahkan Cryptocurrency Baru

Update array data di `MarketSection.tsx` dan `FavoritesSection.tsx`:

```typescript
const priceData: PriceCardProps[] = [
  {
    pair: "NEW/COIN",
    price: "Rp 1,234.56",
    change: "+5.67%",
    volume: "1.234M IDR",
    chartColor: "green",
  },
  // ... cryptocurrency lainnya
];
```

### Kustomisasi Styling

Tailwind CSS v4 menggunakan direktif `@theme` baru untuk kustomisasi. Tambahkan custom theme variables di `src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-brand: #ff6b35;
  --color-crypto-orange: #f97316;
  --spacing-custom: 2.5rem;
}
```

### Mengubah Logo

1. Ganti file `public/images/crypto-logo.png` dengan logo Anda
2. Pastikan ukuran sekitar 44x44 pixels untuk tampilan optimal
3. Format PNG dengan background transparan direkomendasikan

## 📱 Dukungan Browser

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

Project ini siap untuk di-deploy ke platform seperti:

- **Vercel**: `pnpm build` → upload folder `dist`
- **Netlify**: Connect repository → auto deploy
- **GitHub Pages**: Setup GitHub Actions workflow

## 🤝 Kontribusi

1. Fork repository ini
2. Buat feature branch (`git checkout -b feature/fitur-keren`)
3. Commit perubahan (`git commit -m 'Tambah fitur keren'`)
4. Push ke branch (`git push origin feature/fitur-keren`)
5. Buat Pull Request

## 📄 Lisensi

Project ini dilisensikan di bawah MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) untuk utility-first CSS framework yang luar biasa
- [Lucide](https://lucide.dev/) untuk icons yang indah dan konsisten
- [Vite](https://vitejs.dev/) untuk build tool yang sangat cepat
- [React](https://reactjs.org/) untuk UI library yang powerful
- [TypeScript](https://www.typescriptlang.org/) untuk type safety dan developer experience yang baik

---

**Made with ❤️ by mhakimsaputra17**
