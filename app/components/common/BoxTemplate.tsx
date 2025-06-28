'use client';

export interface BoxTemaplte {
    title: string;
    description: string;
    link?: string;
    imgUrl?: string;
}

export default function BoxTemplate({ title, description }: BoxTemaplte) {
    return (
        <>
            <div className="col-lg-4 col-md-6 pb-3 pt-3">
                <div className="review_box h-100">
                    <h3>{title}</h3>
                    {description.split('\n').map((line, index) => (
                        <p key={index}>
                            {line.startsWith('•') ? (
                                <span style={{ display: 'block' }}>
                                    <i className="icofont-check-circled" style={{ marginRight: '8px',color:'blue' }}></i>
                                    {line.replace('•', '').trim()}
                                </span>
                            ) : (
                                line
                            )}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}
