import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MintingModal({ open, setOpen }) {
  return (
    <section
      className={`Collection__mint-modal overflow-hidden transition-all duration-300 ${
        open ? "" : "h-0"
      }`}
    >
      <div className="flex-1 Collection__mint-modal-child">
        <div className="Collection__mint-modal__content">
          <div className="text-right">
            <button
              onClick={() => setOpen(false)}
              className="text-2xl md:text-4xl"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <p className="min-h-[20vh] lg:min-h-[400px] flex justify-center text-[26px] md:text-3xl lg:text-[47.01px] items-center">
            Minting coming soon!
          </p>
        </div>
      </div>
    </section>
  );
}
