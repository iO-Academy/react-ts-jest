interface FooterProps {
    full?: boolean;
}

function Footer({full = false}: FooterProps) {
    return (
        <footer className="flex flex-col">
            <div>Copyright</div>
            {full && (
                <div>Give us a call on 0123456789</div>
            )}
        </footer>
    )
}

export default Footer