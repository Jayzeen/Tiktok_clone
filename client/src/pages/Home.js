import FollowersColumn from '../components/FollowersColumn'

const Home = () => {
    return (
        <div className="container">
            <FollowersColumn />
            <div className="feed">
                <h1></h1>
            </div>
            <div className="suggested_box">
                <div className="section">
                    <div className="suggested">
                        <h2 className="bold">Suggested accounts</h2>
                        <div className="break" />
                        {/* {topFiveNotFollowing.map((notFollowingUser, index) => (
                            <MiniCard
                                key={index} user={notFollowingUser}
                                toggleFollow={userToToggle => setUserToToggle(userToToggle)}
                            />)
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home