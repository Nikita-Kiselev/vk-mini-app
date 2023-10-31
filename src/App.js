import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import FriendsPanel from './panels/FriendsPanel';
import PlaceholderPanel from './panels/PlaceholderPanel';
import Modal from './components/Modal/Modal.jsx';
export const ROUTES = {
	HOME: "home",
	PLACEHOLDER: "placeholder",
	FRIENDS: "friends",
}

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.HOME);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [activeModal, setActiveModal] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = path => {
		setActivePanel(path);
	};



	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout} modal={activeModal ? <Modal setActiveModal={setActiveModal} /> : null}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id={ROUTES.HOME} fetchedUser={fetchedUser} go={go} activePanel={activePanel} />
								<FriendsPanel id={ROUTES.FRIENDS} go={go} activePanel={activePanel} />
								<PlaceholderPanel id={ROUTES.PLACEHOLDER} go={go} activePanel={activePanel} activeModal={activeModal} setActiveModal={setActiveModal} />
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
