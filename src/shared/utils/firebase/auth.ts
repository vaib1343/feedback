import { db, app } from "@/shared/config/firebaseConfig";
import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
    onAuthStateChanged,
    NextOrObserver,
    User
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const auth = getAuth(app);

export const firebaseSignUp = async (payload: SignUpPayload) => {
    const { email, password, firstName, lastName } = payload;
    try {
        const response = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        if (auth.currentUser) {
            await updateProfile(auth?.currentUser, {
                displayName: `${firstName} ${lastName}`,
            });
        }
        if (response.user) {
            const docRef = doc(db, "users", response.user.uid);
            const userDoc = await getDoc(docRef);
            if (!userDoc.exists()) {
                await setDoc(docRef, {
                    displayName: `${firstName} ${lastName}`,
                    email,
                    createdAt: serverTimestamp(),
                });
            }
        }
        return response;
    } catch (error) {
        console.log(error);
    }
};

const logout = async () => {
    return await signOut(auth);
};

export const login = async (payload: { email: string; password: string }) => {
    try {
        const { email, password } = payload;
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log({ user });
    } catch (error) {
        console.log(error);
    }
};

export const onAuthSubscriber = (callback: NextOrObserver<User>) =>
    onAuthStateChanged(auth, callback);
