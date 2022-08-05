import { TipoCobro } from "../../../../tipos/Enums/TipoCobro";
import { Teclado } from "../../../modal/teclado/tecladoPago";

export const InputNumber = (props: { value: string, valorPendiente: string, tipo: TipoCobro, setValue: Function }) => {
    const SetExactValue = () => {
        if (Number(props.valorPendiente) >= 0) { return }
        props.setValue(props.valorPendiente)
    }

    return (
        <div>
            <div className="flex relative ">
                <span className="rounded-l-md inline-flex items-center px-3 border-t border-l border-b
                  border-gray-300 text-gray-500 shadow-sm text-sm bg-blue-400 hover:bg-blue-500 cursor-pointer stroke-white"
                    onClick={SetExactValue}>
                    {
                        props.tipo === TipoCobro.Tarjeta ?
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                    }
                </span>
                <input className="text-right text-xl rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    onChange={(e) => { props.setValue(e.target.value) }} value={props.value} />
            </div>
            <Teclado numInput={props.value} setNumInput={props.setValue} showInput={false} />
        </div>

    );
}