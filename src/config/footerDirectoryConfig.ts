import type { FooterDirectionConfig } from '../types/props';

const footerDirectoryConfig: Array<FooterDirectionConfig> = [
	{
		title: 'Thông tin trang',
		linkList: [
			{
				content: 'Tại sao có trang web này',
				link: 'https://google.com/',
			},
			{
				content: 'Các tính năng chính',
				link: 'https://google.com/',
			},
			{
				content: 'Điều khoản sử dụng',
				link: 'https://google.com/',
			},
		],
	},
	{
		title: 'Tài nguyên sử dụng',
		linkList: [
			{
				content: 'FlatIcon',
				link: 'https://flaticon.com/',
				openInNewTab: true,
			},
			{
				content: 'Freepik',
				link: 'https://freepik.com',
				openInNewTab: true,
			},
			{
				content: 'Google Fonts',
				link: 'https://fonts.google.com/',
				openInNewTab: true,
			},
		],
	},
	{
		title: 'Hỗ trợ',
		linkList: [
			{
				content: 'Blog hỏi đáp',
				link: 'https://google.com/',
				openInNewTab: true,
			},
			{
				content: 'Nhóm hỗ trợ người dùng',
				link: 'https://google.com/',
			},
			{
				content: 'Liên hệ quản trị viên',
				link: 'https://google.com/',
			},
		],
	},
	{
		title: 'Đề tài nổi bật',
		linkList: [
			{
				content: 'Nổi bật',
				link: 'https://google.com/',
				openInNewTab: true,
			},
		],
	},
];

export default footerDirectoryConfig;
