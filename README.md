# Docs Site

Trang docs này dùng `Astro + Starlight` và đã được chuẩn bị sẵn để deploy lên `GitHub Pages`.

## Chạy local

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

## Deploy lên GitHub để người khác xem docs

### 1. Tạo repository trên GitHub

Tạo một repo mới, ví dụ: `docs-site`.

### 2. Khởi tạo Git trong project

Chạy trong thư mục project:

```bash
git init
git branch -M main
git add .
git commit -m "Initial docs site"
git remote add origin https://github.com/<github-username>/<repo-name>.git
git push -u origin main
```

### 3. Bật GitHub Pages

Trên GitHub:

1. Vào `Settings`
2. Chọn `Pages`
3. Ở mục `Source`, chọn `GitHub Actions`

Sau đó mỗi lần bạn `push` lên nhánh `main`, GitHub sẽ tự build và publish docs.

### 4. Link public để chia sẻ

Nếu repo của bạn là:

`https://github.com/<github-username>/<repo-name>`

thì link docs thường sẽ là:

`https://<github-username>.github.io/<repo-name>/`

Nếu repo có tên đúng dạng:

`<github-username>.github.io`

thì link sẽ là:

`https://<github-username>.github.io/`

## Lưu ý

- Repo cần để `Public` nếu bạn muốn mọi người truy cập tự do.
- Không cần commit thư mục `dist/` vì GitHub Actions sẽ tự build.
- Workflow deploy nằm ở [deploy.yml](/d:/THDD/docs/docs-site/.github/workflows/deploy.yml).
