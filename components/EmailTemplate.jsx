const EmailTemplate = ({ req }) => (
    <>
    <h1>
        You received a new inquiry from your portfolio form.
    </h1>
    <ul>
        <li>
            <b>Name:</b>{req.body.name}
        </li>
        <li>
            <b>Email:</b> {req.body.email}
        </li>
        <li>
            <b>Subject:</b> {req.body.subject}
        </li>
        <li>
            <b>Message:</b> {req.body.message}
        </li>
    </ul>
    </>
);
export default EmailTemplate;