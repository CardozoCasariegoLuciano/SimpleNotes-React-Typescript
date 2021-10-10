import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { INoteState } from "../interfaces/note_Interfaces";
import "../styles/profile.scss";
import { loadUserNotes } from "../helpers/functions";
import Note from "../components/Note";
import EditUserForm from "../components/EditUserForm";
import Loader from "../Loader";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [userNotes, setUserNotes] = useState<INoteState[]>([]);
  const [showeditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    loadUserNotes(setUserNotes);
      setLoading(false);
  }, []);

  return (
    <div className="profile">
      <div className="profile_content">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="profile_UserSection">
              <div className="userSection_box">
                <h3>About me</h3>

                <div className="profile_UserData">
                  <p>
                    Name: <span>{user.name}</span>
                  </p>
                  <p>
                    Email: <span className="span_email">{user.email}</span>
                  </p>
                  <p>
                    Notes created: <span>{userNotes.length}</span>
                  </p>
                </div>
              </div>
              <button
                className={"updateBTN " + (showeditForm && "editUserForm_open")}
                onClick={() => setShowEditForm(!showeditForm)}
              >
                {!showeditForm ? "Change Name or Password" : "Cancel"}
              </button>
              {showeditForm && <EditUserForm />}
            </div>
            <div className="profile_NoteSection">
              <h3>My notes</h3>
              <div className="profil_Notes">
                {userNotes.length === 0 ? (
                  <p className="noNotes">You have not notes yet</p>
                ) : (
                  <>
                    {userNotes.map((note) => (
                      <Note key={note._id} note={note} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
