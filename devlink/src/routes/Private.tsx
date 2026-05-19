import { useEffect, useState, type ReactNode } from 'react';
import '../services/firebaseConnection';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebaseConnection';
import { Navigate } from 'react-router-dom';

interface PrivateProps {
	children: ReactNode
}

export function Private({ children }: PrivateProps): any {
	const [load, setLoad] = useState(true);
	const [signed, setSigned] = useState(false);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			if (user) {
				const userData = {
					uid: user?.uid,
					email: user?.email
				}

				localStorage.setItem('@reactlinks', JSON.stringify(userData));
				setLoad(false);
				setSigned(true);
			}
			else {
				setLoad(false);
				setSigned(false);
			}
		});

		return () => {
			unsub();
		}
	}, []);

	if (load) {
		return <div></div>
	}

	if (!signed) {
		return <Navigate to={'/login'} />
	}

	return children
}