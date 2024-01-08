import { FC, useState } from 'react';
import reactLogo from '@assets/react.svg';
import viteLogo from '@assets/vite.svg';
import './App.scss';
import { ThemeSwitcher } from '@components/ThemeSwitcher';

const App: FC = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>My Burger Project</h1>
			<div className="card">
				<button
					onClick={() => setCount((count) => count + 1)}
					data-bs-toggle="tooltip"
					data-bs-placement="top"
					data-bs-delay='{"show":50,"hide":350}'
					data-bs-title="Переключатель темы"
				>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
				<ThemeSwitcher />
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
};

export default App;
