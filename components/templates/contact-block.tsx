// ICONS
export default function ContactBlock({
    phone,
    office,
    email,
    address,
    city,
    state,
    zipCode,
    googleBusiness,
}: any) {
    return (
        <>
            <ul>
                {phone &&
                    <li>
                        <a href={`tel:${phone}`}>
                            <div className="flex items-center md:justify-start justify-center">
                                <span>{phone}</span>
                            </div>
                        </a>
                    </li>
                }
                {office &&
                    <li>
                        <a href={`tel:${office}`}>
                            <div className="flex items-center md:justify-start justify-center">
                                <span>{office}</span>
                            </div>
                        </a>
                    </li>
                }
                {email &&
                    <li>
                        <a href={`mailto:${email}`}>
                            <div className="flex items-center md:justify-start justify-center">
                                <span>{email}</span>
                            </div>
                        </a>
                    </li>
                }
                {city &&
                    <li>
                        <a href={googleBusiness ?? '#'} target={googleBusiness && '_blank'}>
                            <div className="flex items-center md:justify-start justify-center">
                                <span>{address} {city} {state} {zipCode}</span>
                            </div>
                        </a>
                    </li>
                }
            </ul>
        </>
    )
}