import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
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

    return (
        <BoxSC>
            { loading == 'loading' ?
                <BoxSK className='skeleton-container'>
                    {skeletonOn.map((p: number, index: number) =>
                        <CardSkeleton />
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