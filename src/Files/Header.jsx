import React from 'react';

function Header() {
    return (
    
            <div style={{
                background: "url('./Images/Figure.png')",
                backgroundSize: 'auto',
                backgroundSize: 'cover'

            }}>

                <nav className="navbar navbar-expand-lg bg-body-tertiary m-0 p-0" >
                    <div className="container-fluid d-flex justify-content-between align-items-center">
                        <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUTBxQTFhUVGRoaGRgYFR0dHhUeHh8aGyAdFyAeKDQgHR0mIB4YLT0tJyorLjEuHx8zPTMtOCgtLisBCgoKDg0OFxAQGy0eHR0tLy0tLS0tLS0tLSstLy8tLS0tLS0tLS0tLS0tKy0tLS0tLS0rLSstLS0vLS0rNy0tLf/AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEBAQEBAQEBAAAAAAAAAAAABQQDAQIGB//EAEIQAAIBAwIDBAYHBQYHAQAAAAECAAMEEQUhEjFBE1FhcQYiMoGRsRQjUnOCodEzNUJichUkQ3STslNUY5Kio/E0/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBQf/aAAwDAQACEQMRAD8A/uEREqEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERMlzqNla1OG6q00PPDOAcd+CYGuJg/trSv+Yof6qfrO7XNBLXtHZeDHFxZGMd+e6FaIkgXeo3u9ki006PVByee60xg4/qIPhPfoOqc/pP8A6Vx+v5yEVokkXd3Z1QuphSrEKKqAgAnYCopJ4cnbOSM922a0oREQhERAREQEREBERAREQEREBERAREQEl26K2vVuIA/V0enjWlMkDnJ1rvr1bH/Do/OtIrd2VPuHwEl6Nb0rr0ZpJXAZWpKCD12EsSb6OEDQaH3a/IQM1O11UnsqlTFNf8UEdpUB5L/Kw6t12xgk4+dRsKFhYvUo1KiMgLBjVdskcg4YkMCdsc99t5ru9Qf6QaenL2lQe1k4Snnl2h7/AOUZPkN5lr0re1qLU1mp2j59RQDgH/pUxks2/M8TeIkVo1hhU9H6puRjNJiQeh4f1xN1r2n0de29rhGfPG8mrRudUqq18pSkpDCmSOJyDkGrjYAcwozvjJ2xKFxeWtsf7w6L/UwHzlRoiYU1bTXPqVqJ8qi/rNgII2lR9REQESffavYWDgXTgMdwoBZsd/CoJx4znb69ptxXCJUwx5B1ZC3gOIDJ8pKsVInG4r0rdM1iAMquT3sQAPeSPjO0qEREBETjWr0qLL2xA424V8TucD3AwO0REBERAREQJF/b0bjW6S3Chh2dU4YZGeKjvibraztrXP0ZFXOM8KgZ54zicruxNe5V6dRkZQy5AU5DFSc8QP2RONg1wupVaddy4VabAlVBHEagPsgfZEiqkiavZWNnp7tQoUuLYL6i+0x4V/MiW5AsrW61TSqb3Fd/XCPgJTxnIYfw8gRGmKOn2NPTrAU7UeyOvU97eJO5kMrqelKat19Hao3q8X1hZyTslMY2Hco7snqZZNlejncP/p0/0mTQ6L3b/SLpi+ciiSAOFPtAADd8Zz9nhHfCvqhaajf0wdWfswf8KkxA/G/tH8JA85roaPp1AfVUqfnwAk+ZO5mqrUSjSLVCAoGSSdgBzJPxk1LjUdQXNmFpUzyaopZnHeEyOEf1HPgIRuqWFpUH1lOmfNAZibRaFMltPLUW/kPqnzQ+oR7s+M97DV6W9OrTfl6r0+HPkynI/wC0zrZ6lTrU27Ydm1PHGrEepnkc8ip6Hr5giB8Wt9WW4FLUgFc54WX2Ko68Od1Yb5U+4kZxTPKQr++sdRoGnbipVOdmorngYcmDnCAg7+1KWnNdPZIb8BamBxAHIzyOMQam+iYV9ONSp+1d37U9eIMw4W7uEYAHQdJUvLS3vqBS7UMp5g/Mdx8ZkutEta9cvTL06jc3pOVLY+0B6re8GcXt9ZswTbVRXA/gqqFZsdFdMAE+KmBw9LK9zStUFGkzr2lA8QdRgiqmF9Y535Z8d5Ts7qvUos17SNLh6FlbIxz9XMmale0tQ0GlVoZ4Xq25GRgj66nkHxByJZurmlaWzPcsFVRkk9B+sCX/AGxeV/W061qunRmZafF4qr+sRjvAm3TtRo6hTJQMrKeF0YYZDzww8iCCMgjcGYxqWq1d7e0PD07SsqMR4qAce/eZtKr3FT0jq/SKRpFqNMlSytxENUAYFeYwcb4O0LGg+kVDtGSklR6gdkFNQCzcOAWO4VU3G7ETFr95eira/wB3f9qjftE9rhqepz5+PKaPRe3pJc3bqPWe5cE+C4AHlufiZp9IP21r/mF/2VIOt1jVrVqGbmmabZ9ksG9+V2mqeDlPZWSIiAiIgJNtv39X+7o/OtKUm237+r/d0fnWhVKTfRv9wUPu1+QlKTfRv9wUPu1+QgPSB6iaRUFL2mAQeBchM/8AlN1GklGkFpjAUAAdwHKYdddadiGbktSkT5ComcylIcSdUT6XfUqLeweKo47wnDgHvBdlP4ZWG0k1BwekaFv4qLgeashPz+crQaTHcafZ3VYPcU0ZlGAWUHA9/jNkSo+QAowJ44JX1Tg9/dPueQIqahqFivDqVJ6mNhUorxBue7JniU8thkZ69J6dYr1lIsbeuXPLtE7NB4sW3x5Amevr9sK7rTp134GKkpRZgCMZGR5ieH0itaYzcpcU1HNnoOFXzONh57SNOFzpdWy9GkpW4NRqTU3IHN+CotRuEHqcNgeQn3eVn1ywqU7RKqEcLK1WkVUsrBgvrb8wM7dZWr3KUbRqh3VVLbb5AGdp7a11ubdXQEBgCM9xGfjiEqWNewuKtvdBxzUUSd/Bh6hHjmcNNTUanpC9W+p8CvRUIAQ3Dwu2zkbcZznA2A6mfosRiCo+gW9aga/bKRxV6jDPUHhwR4Tz0iWr2dF6KM/ZVldlUZYqAykqOuMjaWYiFYdPvhfBjTp1UAPOohXi/pB9b4gTdESoREQEREBJtt+/q/3dH51pSkoN9H9ID2m3bU14fOmWJHwcH3GRVWSfRqop0emv8VNQjDqrLsQe7lK0xXGmWF1U4rikjMeZKjJ8CYGe+uLDUFe2FRC7owwCCR4+BGxnfSbs3lirPswyrj7LjZh8QZk1ShSsaVJ7ZURadVScAABXzTbl/UD7p9XSVdOuzWtwzI37VAMnI2FRR1IGxHMgDG4wQ7ara1K9JWtsdpTPEmeR5gqTzwykj4HpOthfUb6lmlkMuzIdmQ9zjp18DzGRO1tcUbmiGoMGVhkEHIPvme70y0vHDV19YcmBKsPAMpB/OBrZgq5blJIv729qk6SKZpLtxOWAqHO/ZkZ9UfawQSduRnY6HYsfrw9THIVKruPgxI/KUFUIuF5CBN/tV6H7wo1U/mUdovxTJHvUTdb3FK6oh7dgynkQc56TDfXdStWNDTT9YR679KKnqf5+5fedue20t6VraqlEYVRgCBM9Gfbuv8zV+SStVKCme0xw9c8sdc58J+a0jS0vLm6Zqldf7xUGEqso5J0HWa7r0Yt7qgUq1bog9DXYj3g5UjwIIMLpoNdbX0W41BKKtRkB5mmGcoN/5OGURqFBNMFe5PAnAHOf4QRn38xJi3Net6P3KXWOOiKlNiBgNhMhgOmVK7dN5zqKKtrp6VPYLITvzK0i6g/iAP4YGtb7WaycVC3ULzAqVuFyOY2CkL5E+eJ9WWtpdagtEoy1OF2dWO9MqUGDjZgeLIYHBwZYG0jV6aD0rpMAMmhWBPXAeiQPzPxhFmIiVCIiAiIgIiICZL6ypXtDhrZG4KsDgowzhlPQ/wDzlNcQJIbWbZcFaVYd4bs294IKn3EeU9W51ip7NCmvi1bI+CqSfylWJItSH0y5vkxqlXKnGadMcCnwY5Lke8eUr4iIEytpIWsX09zSdt2wAVc7buh2z4jB8Z89rrNJfWp0anitRkPwYH/dKsQVKW81djgW6DxNcY/JZ4bXUrr/APZVCL9miDk+btuPwhT4ytEFZ7S0oWdDhtlCqOg+Z7z4mdyNp7EqPzlg99ptxXDW1Vw9Z3VkalghguPacHoek1NqmoFfqrOtnpxVKSj3kMSB5AyziMSLUSlplxR0WstQh6tbtGbGwLspUKud+EDhAz3To2ltdaLTp1SUqIqFWGCaboBg9x35jqMjrK8x6javd2vDRdqbAhlZf4SDkZHJl7weYiFYU1TUaK8N5a1C/LNIoyNjqCzAr5MNvGY7Nb9vSim+o4UtQqhaQORTAejzPVjnfGwwAJpF5r1PapbU3P2krgKfcy8Q8t/fNGm2NyLtq+olTUYcAVM8NNM5wCd2JO5JxnbYYhW2g9dqtQVlwoYBDn2hwqST3blh7poiJWSIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH/2Q=="
                            alt="t2c logo"
                            className="logo"
                            style={{
                                width: '70px',
                                height: '60px'
                            }}
                        />
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="container-fluid">
                                <a className="navbar-brand bg-white" href="#"></a>

                                <div className="collapse navbar-collapse bg-black rounded-pill px-1" id="navbarNav">
                                    <div className="navbar-nav ms-auto">
                                        <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                                        <a className="nav-link text-white" href="#">About</a>
                                        <a className="nav-link text-white" href="#">Services</a>
                                        <a className="nav-link text-white" href="#">Blogs</a>
                                        <a className="nav-link text-white" href="#">News</a>
                                        <a className="nav-link text-white" href="#">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <button type="button" className="btn btn-primary rounded-pill" >
                            Get Started
                        </button>
                    </div>
                </nav>
                <div>
                    <img src='./Images/Container.png' className='w-100' />
                    <img src='./Images/Group 6.png' className='w-75 mx-auto d-block'/>
                    <img src='./Images/Group 1686550999@2x.png' className='w-75 d-block mx-auto mt-5'/>
                    <img src='./Images/Container1.png' className='w-75 d-block mx-auto mt-5'/>
                    <img src='./Images/Group 1686551000.png' className='w-75 d-block mx-auto mt-5'/>
                    <img src='./Images/Group 1686550985.png' className='w-25 d-block mx-auto mt-5'/>
                    <img src='./Images/Section.png' className='w-75 d-block mx-auto'/>
                    <img src='./Images/Section1.png' className='w-75 d-block mx-auto'/>
                    <img src='./Images/Group 1686550966.png' className='w-75 d-block mx-auto'/>
                    <img src='./Images/Background.png' className='w-75 d-block mx-auto pb-5'/>

                </div>

            </div>

        
    );
}

export default Header;
