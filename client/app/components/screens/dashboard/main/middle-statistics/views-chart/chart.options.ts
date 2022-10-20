export const options = (isDark: boolean): any => ({
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false,
			},
			ticks: {
				font: {
					size: 15,
				},
				color: isDark ? '#fff' : '#222',
			},
		},
		y: {
			grid: {
				display: false,
				drawBorder: false,
			},
			ticks: {
				display: false,
			},
		},
	},
	borderRadius: 15,
	borderSkipped: false,
	barThickness: 40,
	plugins: {
		tooltip: {
			bodyColor: isDark ? '#fff' : '#222',
			backgroundColor: !isDark ? '#fff' : '#222',
			titleColor: isDark ? '#fff' : '#222',
			titleFont: {
				size: 15,
			},
			bodyFont: {
				size: 14,
			},
			titleAlign: 'center',
			padding: 12,
			displayColors: false,
			yAlign: 'bottom',
			callbacks: {
				label: function (context: any) {
					if (context.parsed.y !== null) {
						return context.parsed.y.toLocaleString()
					}
				},
			},
		},
	},
})
