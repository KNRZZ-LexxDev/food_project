import { useForm } from "react-hook-form";
import { TextInput } from "../inputs_components/text-input/text-input";
import { useContext, useEffect } from "react";
import { FeedbackContext } from "../../context/feedback-context";
import './style.scss'

export const FormFeedback = (props) => {
  const { feedbackForm, setFeedbackForm } = useContext(FeedbackContext);

  const defaultData = { name: "", phone: "", description: "" };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { ...feedbackForm },
  });

  const onSubmit = (data) => {
    setFeedbackForm(data);

    reset({
      name: "",
      phone: "",
      description: "",
    });
    localStorage.removeItem("feedback");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="formFeedBack">
      <TextInput
        label={"Имя"}
        errors={errors}
        name={"name"}
        register={register}
        validate={{
          required: true,
          minLength: {
            value: 2,
            message: 'Имя должно содержать минимум 2 символа'
          },
          maxLength: {
            value: 30,
            message: 'Имя не должно превышать 30 символов'
          },
          pattern: {
            value: /^[A-Z]*$/i
          }
        }}
      />
      <TextInput
        label={"Телефон"}
        errors={errors}
        name={"phone"}
        register={register}
        validate={{
          required: true,
          minLength: {
            value: 2,
            message: 'Имя должно содержать минимум 2 символа'
          },
          maxLength: {
            value: 30,
            message: 'Имя не должно превышать 30 символов'
          },
          pattern: {
            value: /^[0-9]*$/i
          }
        }}
      />
      <TextInput
        label={"Обратная связь"}
        errors={errors}
        name={"description"}
        register={register}
        validate={{
          required: true,
          minLength: {
            value: 2,
            message: 'Имя должно содержать минимум 2 символа'
          },
          maxLength: {
            value: 30,
            message: 'Имя не должно превышать 30 символов'
          },
          pattern: {
            value: /^[A-Z]*$/i
          }
        }}
      />
      <button className="formFeedBack__button">Sand</button>
    </form>
  );
};
