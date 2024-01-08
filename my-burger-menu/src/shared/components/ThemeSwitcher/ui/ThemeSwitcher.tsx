import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme';
import { FC, useCallback, useEffect, useMemo } from 'react';
import './ThemeSwitcher.css';
// Импортируйте весь JS Bootstrap
import * as bootstrap from 'bootstrap';

export const ThemeSwitcher: FC = () => {
	const { theme, toggleTheme } = useTheme();

	useEffect(() => {
		const tooltipTriggerList = document.querySelectorAll(
			'[data-bs-toggle="tooltip"]'
		);
		[...tooltipTriggerList].map((tooltipTriggerEl) => {
			bootstrap.Tooltip.getInstance(tooltipTriggerEl)?.hide();
			return new bootstrap.Tooltip(tooltipTriggerEl, {
				customClass: `${theme}_tooltip`,
			});
		});

		// tooltipTriggerList.forEach((toolTipTrigger, index) => {
		// 	toolTipTrigger.addEventListener('shown.bs.tooltip', () => {
		// 		setTimeout(() => toolTips[index].hide(), 500);
		// 	});
		// });
	}, [theme]);

	const onToggleTheme = useCallback(() => {
		toggleTheme((theme) => {
			return theme;
		});
	}, [toggleTheme]);

	const getBgColor = useMemo(() => {
		if (theme === Theme.LIGHT) return 'bg-primary ';
		return 'bg-secondary ';
	}, [theme]);

	const getLabelColor = useMemo(() => {
		if (theme === Theme.LIGHT) return 'text-primary ';
		return 'text-secondary ';
	}, [theme]);

	return (
		<div className="form-check form-switch text-start fs-3 ">
			<input
				type="checkbox"
				className={`form-check-input ${getBgColor}`}
				id="switch2"
				role="switch"
				onClick={onToggleTheme}
				defaultChecked={theme === Theme.LIGHT}
				data-bs-toggle="tooltip"
				data-bs-placement="bottom"
				data-bs-delay='{"show":150,"hide":500}'
				data-bs-title="Переключатель темы"
			></input>
			<label htmlFor="switch2" className={`form-check-label ${getLabelColor}`}>
				{' '}
				{`${theme === Theme.LIGHT ? 'Светлая' : 'Тёмная'} тема`}
			</label>
		</div>
	);
};
