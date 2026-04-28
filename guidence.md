# Underground Fashion Archive (UFA) - Frontend Teknik Rehber

Bu doküman, uygulamanın "Premium Underground" kimliğini yansıtmak için kullanılacak frontend mimarisini ve görsel standartları kapsar.

---

## 1. Frontend Tech Stack (Modern & Performant)

* **Framework:** Next.js 14+ (App Router) - Server-side Rendering (SSR) ile anlık indirim güncellemeleri ve SEO avantajı.
* **Styling:** Tailwind CSS - Hızlı prototipleme ve "Design Tokens" yönetimi için.
* **Animasyon:** Framer Motion - Editoryal geçişler, smooth scroll ve mikro etkileşimler için vazgeçilmez.
* **Tipografi:** Font optimization (Next/font) - Özel fontların (Helvetica Now, JetBrains Mono vb.) performanslı yüklenmesi.
* **State Management:** TanStack Query (React Query) - Client-side veri yönetimi ve "infinite scroll" (sonsuz kaydırma) yapısı için.

---

## 2. Görsel Standartlar (Design Tokens)

### Renk Paleti (Obsidian & Acid)
* **Background:** `#050505` (Saf siyahtan bir ton daha yumuşak, derinlik için).
* **Surface:** `#0A0A0A` (Kartlar ve bölmeler için).
* **Text (Primary):** `#F2F2F2` (Göz yormayan beyaz).
* **Accent (Action):** `#CCFF00` (Acid Green - İndirim oranları ve interaktif öğeler için).

### Tipografi Hiyerarşisi
* **Headings:** `Inter` veya `Helvetica Now` - Wide/Bold ağırlıkta.
* **Data/Stats:** `JetBrains Mono` - Teknik bilgi, fiyat ve yüzde verileri için "kod" estetiği.
* **Body:** `Inter` - Medium ağırlık, 0.05em harf boşluğu (tracking).

---

## 3. Bileşen Mimarisi (Component Strategy)

Uygulama, sıradan bir e-ticaret sitesinden ziyade bir **dijital kürasyon** gibi davranmalıdır.

### A. The "Vault" Grid (Kürasyon Alanı)
Asimetrik bir grid yapısı kullanılmalıdır. Bazı ürün kartları 1 birim yer kaplarken, öne çıkan "drop"lar 2 birim yer kaplamalıdır.
* **Hover Effect:** Resmin üzerine gelindiğinde "grayscale" (siyah-beyaz) olan görselin renklenmesi ve hafifçe "zoom" yapması.
* **Overlay:** Görselin üzerinde sadece indirim oranı (`[ -40% ]`) ve marka ismi görünmeli.

### B. Navigation (Minimalist)
* Ekranın en üstünde sabit (sticky), ancak sadece yukarı kaydırıldığında görünen (smart header) bir navigasyon.
* Blur efekti (glassmorphism): `backdrop-blur-md bg-black/50`.

---

## 4. Kritik Frontend Etkileşimleri (Framer Motion)

Premium hissiyatını detaylar belirler:

* **Smooth Scroll:** Sayfa kaydırma deneyimini `Lenis` veya `Locomotive Scroll` gibi kütüphanelerle yumuşatmak.
* **Page Transitions:** Sayfalar arası geçişte ekranın bir "shutter" (perde) gibi kapanıp açılması.
* **Entrance Animation:** Ürün listelenirken kartların aşağıdan yukarıya doğru "stagger" (sırayla) efektiyle gelmesi.

---

## 5. Dosya Yapısı (Next.js App Router)

```text
/src
  /app
    /(editorial)       # Marka hikayeleri ve özel seçkiler
    /archive           # İndirimlerin listelendiği ana alan
    /product/[id]      # Ürün detay (editoryal görünüm)
  /components
    /vault
      - ArchiveCard.tsx
      - GridSystem.tsx
    /shared
      - CustomCursor.tsx
      - SmoothScroll.tsx
  /styles
    - globals.css      # Tailwind layerları ve özel font tanımları
  /lib
    - framer-variants.ts # Tekrar eden animasyon tanımları