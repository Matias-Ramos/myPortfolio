// Styles
const containerStyle = "flex w-full justify-center p-4 border-b"

const Header = ({ project }) => (
    <div className={containerStyle}>
        <a
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
            className="h-auto"
        >
            {project.title}
        </a>
    </div>
)

export default Header