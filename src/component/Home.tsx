import React from "react"

import { Promo } from "./Promo/Promo"
import { Company } from "./Company/Company"
import { Sound } from "./Sound/Sound"
import { Catalog } from "./Сatalog/Сatalog"
import { MusSwitch } from "./MusSwitch/MusSwitch"
import { Creator } from "./Creator/Creator"
import { Features } from "./Features/Features"
import { Jobs } from "./Jobs/Jobs"

export const Home = (): React.ReactElement => {
    return (
        <>
            <Promo />
            <Company />
            <Sound />
            <Catalog />
            <MusSwitch />
            <Creator />
            <Features />
            <Jobs />
        </>
    )
}