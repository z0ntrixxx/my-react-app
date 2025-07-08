import { useEffect, useState } from "react";
export const Preloader = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, []);

    return !loading && (
        <div className="preloader">
            <div className="loader"></div>
        </div>
    )
}
