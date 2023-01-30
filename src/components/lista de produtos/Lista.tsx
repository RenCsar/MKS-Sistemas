import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { getProdutos } from "../../store/reducers/produtosSlice"
import { Card } from "../card/Card"
import { BoxSC } from "./Lista.Styled"

export const Lista = () => {

    useEffect(() => {
        dispatch(getProdutos());
    }, [])

    const produtos = useSelector((state: any) => state.produtos.data);
    const dispatch = useDispatch<any>()

    return (
        <BoxSC>
            {produtos.map((el: any, index: number) =>
                <Card
                    key={`${el.name}-${index}`}
                    nome={el.name} preco={el.price}
                    descricao={el.description}
                    img={el.photo}
                />
            )}
        </BoxSC>
    )
}