import React from "react"

import { Promo } from "./Promo/Promo"
import {Company} from "./Company/Company"
import { Sound } from "./Sound/Sound"
import { Plugins } from "./Plugins/Plugins"
import { Studio } from "./Studio/Studio"
import { Creator } from "./Creator/Creator"
import { Features } from "./Features/Features"
import { Jobs } from "./Jobs/Jobs"

export const Home = (): React.ReactElement => {
    return(
        <>
        <Promo/>
        <Company/>
        <Sound/>
        <Plugins/>
        <Studio/>
        <Creator/>
        <Features/>
        <Jobs/>
        </>
    )
}