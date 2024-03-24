export default function Footer() {
    return (
        <footer className="border-t border-solid border-t-purple-75">
            <p className="text-center text-neutral-900 font-medium text-body m-8">
                &copy; {new Date().getFullYear()} Transmit. All rights reserved.
            </p>
        </footer>
    )
}