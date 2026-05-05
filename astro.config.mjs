// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const site = process.env.SITE_URL || 'https://hethongthicucbo.vercel.app/';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
	site,
	base,
	integrations: [
		starlight({
			title: 'Hệ thống thi cục bộ',
			description: 'Tài liệu hướng dẫn sử dụng hệ thống thi cục bộ cho quản trị viên và học sinh.',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Tiếng Việt',
					lang: 'vi',
				},
			},
			components: {
				Head: './src/components/StarlightHead.astro',
				Search: './src/components/StarlightSearch.astro',
				ThemeProvider: './src/components/StarlightThemeProvider.astro',
				ThemeSelect: './src/components/StarlightThemeSelect.astro',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Tổng quan',
					items: [
						{ label: 'Giới thiệu', slug: 'gioi-thieu' },
						{ label: 'Bắt đầu nhanh', slug: 'bat-dau-nhanh' },
						{ label: 'Phát hành', slug: 'phat-hanh' },
						{ label: 'Cài đặt và thiết lập', slug: 'cai-dat-va-thiet-lap' },
					],
				},
				{
					label: 'Hướng dẫn chi tiết',
					items: [
						{
							label: 'Admin',
							items: [
								{ label: 'Tổng quan Admin', slug: 'admin' },
								{ label: 'Dashboard', slug: 'admin/dashboard' },
								{
									label: 'Đề Thi', items: [
										{ label: 'Đề Thi', slug: 'admin/de-thi/de-thi' },
										{ label: 'Tạo đề thi', slug: 'admin/de-thi/tao-de-thi' },
										{ label: 'Quản lý đề thi', slug: 'admin/de-thi/quan-ly-de-thi' },
										{ label: 'Thêm vào', slug: 'admin/de-thi/them-vao' },
										{ label: 'Chỉnh sửa đề thi', slug: 'admin/de-thi/chinh-sua-de-thi' },
									]
								},
								{ label: 'Danh sách Lớp', slug: 'admin/danh-sach-lop' },
								{ label: 'Phiên Thi', slug: 'admin/phien-thi' },
								{ label: 'Thi Thử', slug: 'admin/thi-thu' },
								{ label: 'Ôn Luyện', slug: 'admin/on-luyen' },
								{ label: 'Lịch Sử & Dọn DB', slug: 'admin/lich-su-va-don-db' },
								{ label: 'Giao diện', slug: 'admin/giao-dien' },
								{ label: 'Cài đặt', slug: 'admin/cai-dat' },
							],
						},
						{
							label: 'Trang làm bài',
							items: [
								{ label: 'Phiên thi', slug: 'exam-page/phien-thi' },
								{ label: 'Thi thử', slug: 'exam-page/thi-thu' },
								{ label: 'Ôn luyện', slug: 'exam-page/on-luyen' },
							],
						},
					],
				},
				{
					label: 'Hỗ trợ',
					items: [{ label: 'Troubleshooting / FAQ', slug: 'troubleshooting-faq' }],
				},
			],
		}),
	],
});
