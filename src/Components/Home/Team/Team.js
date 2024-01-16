import './Team.css'

export default function Team(props){
    return (
        <div className="teamMember" data-aos="zoom-in">
            <p className="TeamMemberPara">{props.comment}</p>
            <div className="profile">
                <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" />
                <div className="profileName">
                    <p>Gladis Lennon</p>
                    <p>Head of SEO</p>
                </div>
            </div>
        </div>
    )
}