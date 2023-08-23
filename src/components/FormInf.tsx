import React from 'react';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import {MenuItem, Select, TextField} from "@mui/material";
import {
    DataModel,
    EDataModel,
    EHystology,
    ELumph,
    EN,
    Epr,
    EPrimary,
    EResection,
    EStage,
    ET
} from "../models/DataModel";
import {TCodeName} from "../models/code_name";


const FormInf = () => {

    const { watch, control, handleSubmit, setValue, formState: { errors } } = useForm<DataModel>({

        }
    );
    const onSubmit: SubmitHandler<DataModel> = data => console.log(data);

    const PRVariants: TCodeName<Epr>[] = [
        {
            code: Epr.no,
            name: '-',
        },
        {
            code: Epr.yes,
            name: '+',
        }
    ];
    return (
        <div  className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div  className="formInf">
                    <div className="sectionInf">
                        <label>Возраст пациента:</label>
                        <Controller
                            render={({ field }) => <TextField {...field} />}
                            name={EDataModel.Age}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>Год диагноза:</label>
                        <Controller
                            render={({ field }) => <TextField {...field} />}
                            name={EDataModel.Year_of_diag}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>Диаметр опухоли:</label>
                        <Controller
                            render={({ field }) => <TextField {...field} />}
                            name={EDataModel.Tumor_size}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>PR(+/-):</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={Epr.yes}>+</MenuItem>
                                    <MenuItem value={Epr.no}>-</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.Pr}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>ER(+/-):</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={Epr.yes}>+</MenuItem>
                                    <MenuItem value={Epr.no}>-</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.Er}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>HER2(+/-):</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={Epr.yes}>+</MenuItem>
                                    <MenuItem value={Epr.no}>-</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.Her2}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>T(Tx/0/1/2/3/4/Tis):</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={ET.tx}>Tx</MenuItem>
                                    <MenuItem value={ET.zero}>0</MenuItem>
                                    <MenuItem value={ET.one}>1</MenuItem>
                                    <MenuItem value={ET.two}>2</MenuItem>
                                    <MenuItem value={ET.three}>3</MenuItem>
                                    <MenuItem value={ET.four}>4</MenuItem>
                                    <MenuItem value={ET.tis}>Tis</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.T}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>N(/0/1/2/3/NX):</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={EN.zero}>0</MenuItem>
                                    <MenuItem value={EN.one}>1</MenuItem>
                                    <MenuItem value={EN.two}>2</MenuItem>
                                    <MenuItem value={EN.three}>3</MenuItem>
                                    <MenuItem value={EN.nx}>4</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.N}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>M(/0/1):</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={EN.zero}>0</MenuItem>
                                    <MenuItem value={EN.one}>1</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.M}
                            control={control}
                        />
                    </div >

                    <div className="sectionInf">
                        <label>Количество поражённых подмышечных лимфоузлов:</label>
                        <Controller
                            render={({ field }) => <TextField {...field} />}
                            name={EDataModel.Rx}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>Наличие операции:</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={EResection.zero}>Хирургическая резекция не проводилась. Оценка, основанная на физикальном осмотре</MenuItem>
                                    <MenuItem value={EResection.one}>Хирургическая резекция не проводилась. Оценка основана на диагностической биопсии</MenuItem>
                                    <MenuItem value={EResection.three}>Хирургическая резекция, выполненная без предоперационного системного лечения или облучения</MenuItem>
                                    <MenuItem value={EResection.five}>Хирургическая резекция, выполняемая с предоперационным системным лечением или облучением</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.Resection}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>Гистологический тип:</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={EHystology.a}>Эпителиальное новообразование</MenuItem>
                                    <MenuItem value={EHystology.b}>Дольковая карцинома</MenuItem>
                                    <MenuItem value={EHystology.c}>Внутрипротоковая карцинома</MenuItem>
                                    <MenuItem value={EHystology.d}>Протоковая карцинома</MenuItem>
                                    <MenuItem value={EHystology.e}>Муцинозная аденома</MenuItem>
                                    <MenuItem value={EHystology.f}>Трубчатая аденома</MenuItem>
                                    <MenuItem value={EHystology.g}>Воспалительная карцинома</MenuItem>
                                    <MenuItem value={EHystology.h}>Комедокарцинома</MenuItem>
                                    <MenuItem value={EHystology.i}>Болезнь Педжета</MenuItem>
                                    <MenuItem value={EHystology.j}>Папиллома</MenuItem>
                                    <MenuItem value={EHystology.k}>Филлоидная фиброаденома</MenuItem>
                                    <MenuItem value={EHystology.l}>Апокринная аденома</MenuItem>
                                    <MenuItem value={EHystology.m}>Медулярная</MenuItem>
                                    <MenuItem value={EHystology.n}>Крибриформная карцинома</MenuItem>
                                    <MenuItem value={EHystology.n}>Фиброаденома</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.Histology}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>Степень злокачественности:</label>
                        <Controller
                            render={({ field }) => <TextField {...field} />}
                            name={EDataModel.Axillary_level}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf" >
                        <label>Поражение лимфоузлов:</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={EStage.r}>Регионарные</MenuItem>
                                    <MenuItem value={EStage.d}>Дистантные</MenuItem>
                                    <MenuItem value={EStage.l}>Локализованные</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.Stage}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>Первичный очаг:</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={EPrimary.n}>Сосок и ареола</MenuItem>
                                    <MenuItem value={EPrimary.c}>Центральная часть груди</MenuItem>
                                    <MenuItem value={EPrimary.ui}>Верхне-внутренний квадрант молочной железы</MenuItem>
                                    <MenuItem value={EPrimary.di}>Нижне-внутренний квадрант груди</MenuItem>
                                    <MenuItem value={EPrimary.uo}>Верхне-наружный квадрант молочной железы</MenuItem>
                                    <MenuItem value={EPrimary.do}>Нижне-наружный квадрант молочной железы</MenuItem>
                                    <MenuItem value={EPrimary.a}>Подмышечный хвост груди</MenuItem>
                                    <MenuItem value={EPrimary.cov}>Перекрывающееся поражение молочной железы</MenuItem>
                                    <MenuItem value={EPrimary.chest}>Грудь</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.Primary}
                            control={control}
                        />
                    </div >

                    <div className="sectionInf">
                        <label>Суммарное количество удаленных лимфоузлов:</label>
                        <Controller
                            render={({ field }) => <TextField {...field} />}
                            name={EDataModel.Rx}
                            control={control}
                        />
                    </div >
                    <div className="sectionInf">
                        <label>Состояние регионарных лимфоузлов:</label>
                        <Controller
                            render={({ field }) => (
                                <Select {...field}>
                                    <MenuItem value={ELumph.a}>Неизвестно Nx</MenuItem>
                                    <MenuItem value={ELumph.b}>Отсутствие вовлечения регионарных лимфатических узлов</MenuItem>
                                    <MenuItem value={ELumph.c}>Подвижный подмышечный лимфатический узел (узлы), ипсилатеральный, положительный (По крайней мере, один метастаз размером более 2 мм)</MenuItem>
                                    <MenuItem value={ELumph.d}>Подмышечный/регионарный лимфатический узел(ы)</MenuItem>
                                    <MenuItem value={ELumph.e}>Подмышечный лимфатический узел(ы), ипсилатеральный, положительный (По крайней мере, один микрометастаз размером от 0,2 мм до 2 мм или более 200 клеток ) N1mi</MenuItem>
                                    <MenuItem value={ELumph.f}>Клинически подвижный подмышечный лимфатический узел (узлы), ипсилатеральный, положительный N1 (Клиническая оценка из-за неоадъювантной терапии)</MenuItem>
                                    <MenuItem value={ELumph.g}>N1</MenuItem>
                                    <MenuItem value={ELumph.h}>N2; нет информации о том, какие узлы были задействованы</MenuItem>
                                    <MenuItem value={ELumph.i}>Надключичный узел (узлы), ипсилатеральный N3c</MenuItem>
                                    <MenuItem value={ELumph.j}>N2a (клиническая оценка из-за неоадъювантной терапии или отсутствия патологии)</MenuItem>
                                    <MenuItem value={ELumph.k}>N3a</MenuItem>
                                    <MenuItem value={ELumph.l}>N3</MenuItem>
                                    <MenuItem value={ELumph.m}>N1mi</MenuItem>
                                    <MenuItem value={ELumph.n}>Внутренний узел (узлы) молочной железы ( клиническое проявление ) с поражением подмышечных и без поражения подключичных N3b</MenuItem>
                                    <MenuItem value={ELumph.o}>Внутренний узел (узлы) молочной железы, положительный на сторожевых узлах, но клинически не проявляющийся с подмышечным лимфатическим узлом (узлами)</MenuItem>
                                    <MenuItem value={ELumph.p}>Внутренний узел (узлы) молочной железы с подмышечными лимфатическими узлами с подключичными (апикальными) лимфатическими узлами или без них N3b</MenuItem>
                                    <MenuItem value={ELumph.q}>Фиксированные/ подвижные подмышечные узлы, положительные (т.е. по крайней мере один метастаз размером более 2 мм)</MenuItem>
                                    <MenuItem value={ELumph.r}>Внутренний узел (узлы) молочной железы (клиническое проявление) БЕЗ подмышечного лимфатического узла(ов) N2b</MenuItem>
                                    <MenuItem value={ELumph.s}>Внутренний узел (узлы) молочной железы с подмышечными лимфатическими узлами с подключичными (апикальными) лимфатическими узлами N3b</MenuItem>
                                    <MenuItem value={ELumph.t}>Внутренний узел (узлы) молочной железы, положительный на сторожевых узлах, но клинически не проявляющийся Без подмышечных лимфатических узлов N1b</MenuItem>
                                    <MenuItem value={ELumph.u}>N3c</MenuItem>
                                    <MenuItem value={ELumph.w}>N2b</MenuItem>
                                    <MenuItem value={ELumph.x}>N3b</MenuItem>
                                    <MenuItem value={ELumph.y}>Внутренний узел (узлы) молочной железы, клинически проявляющийся статус подмышечных лимфоузлов неизвестен N2b</MenuItem>
                                    <MenuItem value={ELumph.z}>Внутренний узел (узлы) молочной железы Без подмышечных лимфатических узловс подключичными (апикальными) лимфатическими узлами N3b</MenuItem>
                                </Select>
                            )}
                            name={EDataModel.Stage}
                            control={control}
                        />
                    </div >

                    <input type="submit" />
                </div >
            </form>
        </div >
    );
};

export default FormInf;