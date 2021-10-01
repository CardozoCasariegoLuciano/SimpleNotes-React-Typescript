import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { INoteState } from "../interfaces/note_Interfaces";
import "../styles/profile.scss";
import { loadUserNotes } from "../helpers/functions";
import Note from "../components/Note";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [userNotes, setUserNotes] = useState<INoteState[]>([]);

  useEffect(() => {
    loadUserNotes(setUserNotes);
  }, []);

  return (
    <div className="profile">
      <div className="profile_content">
        <div className="profile_UserSection">
          <div className="userSection_box">
            <h3>About me</h3>

            <div className="profile_UserData">
              <p>
                Name: <span>{user.name}</span>
              </p>
              <p>
                Email: <span>{user.email}</span>
              </p>
              <p>
                Notes created: <span>{userNotes.length}</span>
              </p>
            </div>
          </div>
          change name or password
        </div>
        <div className="profile_NoteSection">
          <h3>My notes</h3>
          <div className="profil_Notes">
            {userNotes.map((note) => (
              <Note key={note._id} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
