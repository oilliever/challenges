import './App.scss';
import { StyledButton as Button } from './components/StyledButton';
import { StyledTextInput, Task } from './components/StyledInput';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tabs } from './components/Tabs';
import { useState } from 'react';

function App() {
    let taskStorage = JSON.parse(localStorage.getItem('tasks'));
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState(taskStorage || []);

    const [noti, setNoti] = useState(false);

    var now = new Date();
    var uid = now.getTime();

    // action click on Add button
    const handleSubmit = () => {
        if (task) {
            setTasks((pre) => {
                const newTasks = [
                    ...pre,
                    { id: uid, name: task, isChecked: false },
                ];
                // newTasks.sort((a, b) => (a.isChecked > b.isChecked ? 1 : -1));
                localStorage.setItem('tasks', JSON.stringify(newTasks));
                return newTasks;
            });
            setTask('');
            setNoti(false);
        } else {
            setNoti(true);
        }
    };

    // action when press enter in input
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    // toggle task check - uncheck
    const handleChangeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].isChecked = !newTasks[index].isChecked;

        newTasks.sort((a, b) => (a.isChecked > b.isChecked ? 1 : -1));
        taskStorage[index] = {
            id: taskStorage[index].id,
            name: taskStorage[index].name,
            isChecked: !taskStorage[index].isChecked,
        };
        localStorage.setItem('tasks', JSON.stringify(taskStorage));
        setTasks(newTasks);
    };

    // delete task
    const handelRemoveTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);

        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTasks(newTasks);
    };

    //#region filter and sort isChecked
    const oldTasks = [...tasks];
    const filtered = oldTasks.filter((obj) => {
        return obj.isChecked === false;
    });

    const found = oldTasks.find((obj) => {
        return obj.isChecked === true;
    });
    //#endregion

    // delete all task is checked
    const handleDeleteTasks = () => {
        const newTasks = [...filtered];
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTasks(newTasks);
    };

    return (
        <div className='container'>
            <h1 style={{ paddingBottom: '60px' }}>#todo</h1>
            <Tabs>
                <div label='All'>
                    <div className='tab-content-header'>
                        <StyledTextInput
                            value={task}
                            type='text'
                            placeholder='add details'
                            onChange={(e) => setTask(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <Button
                            text='Add'
                            className='btn-default-primary btn-lg'
                            onClick={handleSubmit}
                        />
                        {noti && (
                            <p style={{ color: 'red' }}>
                                You have not entered the task!
                            </p>
                        )}
                    </div>
                    <div className='tab-content-body'>
                        {Object.keys(tasks)
                            // .sort((a, b) =>
                            //     a.isChecked > b.isChecked ? 1 : -1
                            // )
                            .map((key, index) => (
                                <Task
                                    key={tasks[key].id}
                                    id={tasks[key].id}
                                    label={tasks[key].name}
                                    checked={tasks[key].isChecked}
                                    onChange={() => handleChangeTask(index)}
                                    onClick={() => handelRemoveTask(index)}
                                />
                            ))}
                    </div>
                </div>
                <div label='Active'>
                    <div className='tab-content-header'>
                        <StyledTextInput
                            value={task}
                            type='text'
                            placeholder='add details'
                            onChange={(e) => setTask(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <Button
                            text='Add'
                            className='btn-default-primary btn-lg'
                            onClick={handleSubmit}
                        />
                        {noti && (
                            <p style={{ color: 'red' }}>
                                You have not entered the task!
                            </p>
                        )}
                    </div>
                    <div className='tab-content-body'>
                        {Object.keys(tasks).map((key, index) => {
                            if (!tasks[key].isChecked)
                                return (
                                    <Task
                                        key={tasks[key].id}
                                        id={tasks[key].id}
                                        label={tasks[key].name}
                                        checked={tasks[key].isChecked}
                                        onChange={() => handleChangeTask(index)}
                                        onClick={() => handelRemoveTask(index)}
                                    />
                                );
                        })}
                    </div>
                </div>
                <div label='Completed'>
                    {found ? (
                        <>
                            <div className='tab-content-body'>
                                {Object.keys(tasks).map((key, index) => {
                                    if (tasks[key].isChecked)
                                        return (
                                            <Task
                                                key={tasks[key].id}
                                                id={tasks[key].id}
                                                label={tasks[key].name}
                                                checked={tasks[key].isChecked}
                                                onChange={() =>
                                                    handleChangeTask(index)
                                                }
                                                onClick={() =>
                                                    handelRemoveTask(index)
                                                }
                                            />
                                        );
                                })}
                            </div>
                            <div className='tab-content-footer'>
                                <Button
                                    className='border-sm btn-default-danger'
                                    icon={<DeleteOutlineIcon />}
                                    text='delete all'
                                    onClick={() => handleDeleteTasks()}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <p>No tasks completed yet!</p>
                        </>
                    )}
                </div>
            </Tabs>
        </div>
    );
}

export default App;
