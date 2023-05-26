"use client"
import React from "react";
import { useAppSelector } from "@/shared/store";
import { useRouter } from "next/navigation";
import style from '@/app/roadmap/roadmap.module.scss';
import GoBack from "@/shared/components/common/go-back/go-back";
import { Jost } from 'next/font/google'
const jost = Jost({
    subsets: ['latin']
})


function Roadmap() {
    const { user, status } = useAppSelector(state => state.auth)
    const router = useRouter();

    if (status === 'loading') {
        return <p>loading</p>
    }

    if (status === 'idle' && !Object.keys(user).length) {
        router.push('/login')
        return null
    }

    return <React.Fragment>
        <div className={`${style.headerContainer} ${jost.className}`}>
            <div>
                <GoBack className={style.goback} />
                <h1>Roadmap</h1>
            </div>
            <div>

            </div>
        </div>
    </React.Fragment>
}

export default Roadmap;