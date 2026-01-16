import PersonalSchedule from './PersonalSchedule';

const Schedule = () => {
  const teachers = ['one', 'two', 'three'];

  return (
    <div className="flex justify-center">
      {teachers.map((t, i) => (
        <PersonalSchedule teacher={t} key={i} />
      ))}
    </div>
  );
};

export default Schedule;
