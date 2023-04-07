export default ({ beast, handleClose }) => {
    return (
        <dialog id="modal-beast" open>
            <article>
                <a href="#close"
                aria-label="close"
                className="close"
                data-target="modal-beast"
                onClick={handleClose}></a>
                <hgroup>
            <div style={{
                display: 'flex',
                gap: '1rem',
            }}>
                <img style={{ width: '200px' }}
                    key={beast._id} 
                    src={beast.image_url} alt={beast.title} />
                <hgroup>
                    <h2>{beast.title}</h2>
                    <p>{beast.description}</p>
                </hgroup>
                </div>
                </hgroup>
                </article>
        </dialog>
    )
}