import { IconX } from "@tabler/icons-react";
import { useState } from "react";

export function AreasSection() {
  const [isCivelModalOpen, setIsCivelModalOpen] = useState(false);
  const [isEleitoralModalOpen, setIsEleitoralModalOpen] = useState(false);

  function openCivelModal() {
    setIsCivelModalOpen(true);
  }

  function closeCivelModal() {
    setIsCivelModalOpen(false);
  }

  function openEleitoralModal() {
    setIsEleitoralModalOpen(true);
  }

  function closeEleitoralModal() {
    setIsEleitoralModalOpen(false);
  }

  return (
    <section id="areas" className="p-9 h-screen flex flex-col mb-9 md:mb-0">
      <div>
        <img
          src="./src/assets/images/thay.png"
          alt=""
          className="w-full object-cover h-64"
        />
      </div>

      <div className="flex flex-col items-center mt-4 space-y-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-4xl">Áreas de atuação:</h2>
          <p className="w-full md:w-[640px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            adipisci, reiciendis distinctio optio asperiores mollitia deleniti
            aliquam provident porro. Tempore a expedita ducimus nemo quos
            delectus qui, reprehenderit illum odit?
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
          <button className="btn w-full md:w-auto hover:bg-zinc-500 transition ease-in-out" onClick={openCivelModal}>
            Cível
          </button>
          <button className="btn w-full md:w-auto hover:bg-zinc-500 transition ease-in-out" onClick={openEleitoralModal}>
            Eleitoral
          </button>
        </div>

        <div>
          {isCivelModalOpen && (
            <div className="fixed inset-0 bg-zinc-300/60 flex items-center justify-center">
              <div className="w-[640px] rounded-lg py-6 px-6 shadow-md bg-zinc-200">
                <div className="flex items-center justify-between flex-col space-y-6">
                  <h3 className="text-lg font-semibold">Cível</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat maiores doloremque dignissimos alias expedita
                    voluptas iure suscipit similique inventore a quis sequi
                    recusandae eveniet neque dolores quasi beatae, ullam velit!
                  </p>
                  <button onClick={closeCivelModal} className="btn">
                    <IconX size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {isEleitoralModalOpen && (
            <div className="fixed inset-0 bg-zinc-300/60 flex items-center justify-center">
              <div className="w-[640px] rounded-lg py-6 px-6 shadow-md bg-zinc-200">
                <div className="flex items-center justify-between flex-col space-y-6">
                  <h3 className="text-lg font-semibold">Eleitoral</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugiat maiores doloremque dignissimos alias expedita
                    voluptas iure suscipit similique inventore a quis sequi
                    recusandae eveniet neque dolores quasi beatae, ullam velit!
                  </p>
                  <button onClick={closeEleitoralModal} className="btn">
                    <IconX size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
