
interface VideoProp {
    link: string
    title: string
    enableControls: boolean
    controls: boolean
}

export default function Video(props: VideoProp) {
    const { link, enableControls, title } = props
    return (
        <div className="relative overflow-x-hidden">
            <div>
                <video preload="auto" loop autoPlay muted playsInline title={title} className="w-full">
                    <source src={link}
                        type="video/mp4" />
                    Sorry, your browser doesnt support embedded videos.
                </video>
            </div>
        </div>
    )
}