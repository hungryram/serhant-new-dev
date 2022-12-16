import Styles from "../../styles/footer.module.css"
import Link from "next/link"

// UTIL
import ContentEditor from "../templates/contenteditor"

export default function Footer({
    address,
    city,
    state,
    zip_code,
    company_name,
    links,
    legal,
    footerText,
    footerDisclaimer,
    phone_number,
    office_number,
    email,
    image,
    googleBusiness,
    facebook,
    youtube,
    instagram,
    twitter,
    reddit,
    linkedin,
    yelp,
    pinterest,
    tiktok,
    zillow,
    size,
    website,
}: any) {
    return (
        <footer className={Styles.footer}>
            <div className="pt-20 pb-10">
                <div className="container">
                    {footerDisclaimer &&
                        <div className="text-center text-lg">
                            <ContentEditor
                                content={footerDisclaimer}
                            />
                        </div>
                    }
                </div>
            </div>
            <div className="text-center p-4">
                {legal ?
                    <ul>
                        {legal?.map((node) => {
                            return (
                                <li className="inline text-xs mx-2" key={node._id}>
                                    <Link href={`/legal/${node.slug}`}>
                                        {node.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    : null
                }
                {/* <p className="text-xs font-light pt-0">&copy; Copyright {new Date().getFullYear()} &middot; <Link href={website ?? '/'}>{company_name}</Link> &middot; Website built by <a href="https://www.hungryram.com/" className="font-bold" target="_blank" rel="noreferrer">Hungry Ram</a></p> */}
            </div>
        </footer>
    )
}