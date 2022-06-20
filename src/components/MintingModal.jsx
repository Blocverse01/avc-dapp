import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MintingModal({ open, setOpen }) {
  return (
    <section
      style={{ backdropFilter: open ? "blur(5px)" : "none" }}
      className={`overflow-hidden ${
        open
          ? "fixed inset-0 transition-all duration-300 flex justify-center items-center z-[9999]"
          : "h-0"
      }`}
    >
      <div className="Collection__mint-modal__content">
        <div className="text-right">
          <button
            onClick={() => setOpen(false)}
            className="text-2xl md:text-4xl"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <p className="min-h-[20vh] lg:min-h-[160px] flex justify-center text-[26px] md:text-3xl lg:text-[47.01px] items-center">
          Minting coming soon!
        </p>
      </div>
    </section>
  );
}
