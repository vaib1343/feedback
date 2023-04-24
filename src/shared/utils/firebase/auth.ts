import { db, app } from "@/shared/config/firebaseConfig";
import { SignUpPayload } from "@/shared/types/auth.types";
import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
    onAuthStateChanged,
    NextOrObserver,
    User,
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
                    role: "user",
                });
            }
        }
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const logout = async () => {
    return await signOut(auth);
};

export const login = async (payload: { email: string; password: string }) => {
    try {
        const { email, password } = payload;
        const user = await signInWithEmailAndPassword(auth, email, password);
        return user;
    } catch (error) {
        console.log(error);
    }
};

export const getUserDetails = async (uid: string) => {
    try {
        const docRef = doc(db, "users", uid);
        const response = await getDoc(docRef);
        return { ...response.data() };
    } catch (err) {
        console.log(err)
    }
};

export const onAuthSubscriber = (callback: NextOrObserver<User>) =>
    onAuthStateChanged(auth, callback);
