import { useState } from "react";
import "../styles/noteDescription.scss";

interface NoteDescriptionProps {
  text: string;
  motherNoteID: string;
}

const NoteDescription = ({ text, motherNoteID }: NoteDescriptionProps) => {
  const [showMore, setShowMore] = useState(false);

  const textLimit: boolean = text.length > 170;
  let subText = text.slice(0, 170);

  const showCompleteText = () => {
    const motherNote = document.getElementById(motherNoteID);
    motherNote!.classList.toggle("getLarger");

    const readMoreEl = document.getElementById(`${motherNoteID}RM`);
    readMoreEl!.classList.toggle("expandedReadMore");

    setShowMore(!showMore);
  };

  return (
    <div className="NoteDescription">
      {textLimit ? (
        <div className="NDescription_largeText">
          <p>{!showMore ? subText : text}</p>
          <p
            className="leerMas"
            id={`${motherNoteID}RM`}
            onClick={() => showCompleteText()}
          >
            {!showMore ? "Leer mas" : "Mostrar menos"}
          </p>
        </div>
      ) : (
        <p className="NDescription_shortText">{text}</p>
      )}
    </div>
  );
};

export default NoteDescription;
