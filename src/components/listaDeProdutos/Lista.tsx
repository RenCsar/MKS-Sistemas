import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { toast } from "react-toastify"
import { toastConfig } from "../../utils/toast"
import { getProdutos } from "../../store/reducers/produtosSlice"
import { TProdutos, TStore } from "../../utils/types"
import { Card } from "../card/Card"
import { CardSkeleton } from "../cardSkeleton/CardSkeleton"
import { BoxSC, BoxSK } from "./Lista.Styled"

export const Lista = () => {

    useEffect(() => {
        dispatch(getProdutos());
    }, [])

    const produtos = useSelector((state: TStore) => state.produtos.data);
    const loading = useSelector((state: TStore) => state.produtos.status);  
    const dispatch = useDispatch<any>()

    const skeletonOn = [1, 2, 3, 4, 5, 6, 7, 8]  
    
    if(loading == 'failed') toast.error('Erro no Servidor, por favor tente novamente mais tarde!', toastConfig);

    return (
        <BoxSC>
            { loading == 'loading' || loading == 'failed'?
                <BoxSK className='skeleton-container'>
                    {skeletonOn.map((p: number, index: number) =>
                        <CardSkeleton key={`${p}-${index}`}/>
                    )}
                </BoxSK>
                : produtos.map((el: TProdutos, index: number) =>
                    <Card
                        key={`${el.name}-${index}`}
                        {...el}
                    />
                )}
        </BoxSC>
    )
}