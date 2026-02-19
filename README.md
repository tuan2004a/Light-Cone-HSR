# Light Cone HSR
**Ứng dụng web hiện đại giúp bạn khám phá, tìm kiếm và quản lý bộ sưu tập Light Cones từ game Honkai: Star Rail một cách dễ dàng và trực quan.

---
## Mục lục
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Yêu cầu môi trường](#yêu-cầu-môi-trường)
- [Cài đặt & chạy dự án](#cài-đặt--chạy-dự-án)
- [Các script trong `package.json`](#các-script-trong-packagejson)
- [Cấu trúc thư mục](#cấu-trúc-thư-mục)
- [Preview Video](#preview-video)
- [Lưu ý khi phát triển](#lưu-ý-khi-phát-triển)
- [License](#license)
- [Contact](#contact)

---
## Công nghệ sử dụng

- **React 19** - Thư viện JavaScript để xây dựng giao diện người dùng
- **Vite** - Công cụ build và dev server hiện đại, nhanh chóng
- **Tailwind v4** - Framework CSS utility-first để styling
- **Zustand** - Thư viện quản lý state nhẹ và đơn giản
- **Axios** - Thư viện HTTP client để gọi API
- **GSAP** - Thư viện animation mạnh mẽ cho các hiệu ứng chuyển động
- **JSON Server** - RESTful API server giả lập để phát triển và testing

---
## Yêu cầu môi trường

- **Node.js**: Khuyến nghị >= 20.x
```bash
node -v
```
- **pnpm**: Khuyến nghị >= 10.x
```bash
pnpm -v
```

---
## Cài đặt & chạy dự án

### 1. Clone project

```bash
git clone <your-repo-url>
cd carousel-slider-ww
```

### 2. Cài đặt dependencies

```bash
pnpm install
```

### 3. Chạy JSON Server (mock API)

```bash
pnpm json
```

> **Lưu ý**: Trong `package.json` đã cấu hình script và chạy JSON Server ở port `3001`.

### 4. Chạy môi trường phát triển

```bash
pnpm dev
```
> **Lưu ý**: Mặc định Vite sẽ chạy ở `http://localhost:5173`

---
## Cấu trúc thư mục

> **Lưu ý**: Tổ chức file/folder theo Components-based architecture, đây là mô tả khái quát:

```
src/
├── assets/                     # Tài nguyên tĩnh (images, icons, v.v.)
├── components/                 # Các component React
│   ├── common/                 # Các component dùng chung
│   │   ├── Button.jsx
│   │   └── SystemMessage.jsx
│   ├── Card.jsx                # Component hiển thị Light Cone card
│   ├── Information.jsx         # Component hiển thị thông tin chi tiết
│   ├── NavBar.jsx              # Component thanh điều hướng
│   ├── ShowBgCard.jsx          # Component hiển thị background card
│   └── SideBar.jsx             # Component sidebar
├── config/                     # Cấu hình ứng dụng
├── context/                    # React Context providers
├── db/                         # JSON Server database
├── hooks/                      # Custom React hooks
├── page/                       # Các page components
├── service/                    # Service layer cho API calls
└── store/                      # Zustand state management
    └── slices/                 # Store slices
```

---
## Preview Video




![Video alt](https://github.com/user-attachments/assets/914a4982-d38c-4146-b792-2f8e8e9d88c0)
