import { Skeleton } from "@mui/material"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { getProdutos } from "../../store/reducers/produtosSlice"
import { Card } from "../card/Card"
import { BoxSC, BoxSK } from "./Lista.Styled"

export const Lista = () => {

    useEffect(() => {
        dispatch(getProdutos());
    }, [])

    const produtos = useSelector((state: any) => state.produtos.data);
    const loading = useSelector((state: any) => state.produtos.status);  
    const dispatch = useDispatch<any>()

    return (
        <BoxSC>
            { loading == 'loading' ?
                <BoxSK className='skeleton-container'>
                    {produtos.map((p: any, index: number) =>
                        <Skeleton
                            variant="rounded"
                            width={217}
                            height={285}
                            key={index}
                        />
                    )}
                </BoxSK>
                : produtos.map((el: any, index: number) =>
                    <Card
                        key={`${el.name}-${index}`}
                        {...el}
                    />
                )}
        </BoxSC>
    )
}