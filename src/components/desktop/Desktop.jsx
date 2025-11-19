export function Desktop(){
    return(
        <div 
        className='fixed inset-0 top-5 bottom-0'
        style={{
            background: 'radial-gradient(ellipse at center, #0D0D0D 0%, #0000 100%)',
        }}
        >
        <div
        className="absolute inset-0"
        style={{
            background: 'radial-gradient(ellispe at center, transparent 0%, rgba(0,0,0,0.4) 100%',
        }}
        >
        </div>
        </div>
    )
}