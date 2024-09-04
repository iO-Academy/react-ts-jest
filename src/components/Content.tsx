import {useEffect, useState} from "react";

interface Country {
    name: string;
    code: string;
}

function Content() {
    const [countries, setCountries] = useState<Country[]>([])

    useEffect(() => {
        fetch('countries.json')
            .then(res => res.json())
            .then(data => {
                setCountries(data)
            })
    }, [])

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl mb-4">Countries</h1>
            <ul className="list-disc list-inside columns-4">
            {countries.map(country => (
                <li key={country.code} data-code={country.code}>{country.name}</li>
            ))}
            </ul>

        </div>
    )
}

export default Content