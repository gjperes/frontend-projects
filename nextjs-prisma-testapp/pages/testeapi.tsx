import { NextPage } from "next";
import { useEffect, useState } from "react";

const TesteAPI: NextPage = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`/api/hello`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <h1>Tá carregando more, espera!</h1>
    if (!data) return <h1>Affs meu, tá sem data!</h1>

    return (
        <div>
            <h1>
                Oi brasil!
            </h1>
            <p>{data['name']} seu níver é dia {data['niver']} néah? </p>
        </div>
    )
};

export default TesteAPI;