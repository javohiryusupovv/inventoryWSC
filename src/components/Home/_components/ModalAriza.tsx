"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { CheckCircle, MessagesSquare } from "lucide-react";
import { sendToTelegram } from "@/actions/sendToTelegram";

// ✅ Validatsiya sxemasi
const schema = z.object({
  name: z.string().optional(),
  phone: z
    .string()
    .min(9, "Телефон должен содержать 9 цифр")
    .max(9, "Телефон должен содержать 9 цифр")
    .regex(/^\d+$/, "Неверный формат телефона"),
  comment: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие с Privacy Policy",
  }),
});

type FormType = z.infer<typeof schema>;

export default function ModalAriza() {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      comment: "",
      consent: false,
    },
  });

  const onSubmit = async (data: FormType) => {
    const res = await sendToTelegram(data);

    if (res.ok) {
      setSuccess(true);
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
        reset();
      }, 4000);
    } else {
      alert("❌ Telegramga yuborishda xatolik yuz berdi");
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger
          onClick={() => setOpen(true)}
          className="flex w-full justify-center text-[#aa60fa] border-[#aa60fa] hover:bg-[#aa60fa] transition-all duration-200 hover:text-white items-center space-x-2 text-lg px-8 py-[10px] rounded-[6px] border"
        >
          <MessagesSquare className="w-5 h-5" />
          <span>Заказать звонок</span>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              {!success ? "Форма заявки" : ""}
            </DialogTitle>
            {!success && (
              <DialogDescription>
                Заполните форму, и мы с вами свяжемся
              </DialogDescription>
            )}
          </DialogHeader>

          {!success ? (
            // 📌 Forma
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              id="modal-form"
            >
              <div className="space-y-2">
                <label htmlFor="name">Имя</label>
                <Input
                  id="name"
                  placeholder="Введите ваше имя"
                  {...register("name")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone">Телефон *</label>
                <article className="flex items-center gap-2 border rounded-md px-2">
                  <span>+998</span>
                  <input
                    className="w-full h-full outline-none py-2"
                    id="phone"
                    type="tel"
                    placeholder="90 123 45 67"
                    maxLength={9}
                    {...register("phone")}
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(
                        /\D/g,
                        ""
                      );
                    }}
                  />
                </article>
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="comment">Комментарий</label>
                <Textarea
                  id="comment"
                  placeholder="Ваш комментарий"
                  {...register("comment")}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="privacy"
                  checked={watch("consent")}
                  onCheckedChange={(val) => setValue("consent", !!val)}
                />
                <label htmlFor="privacy" className="text-sm">
                  Я соглашаюсь с условиями{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-500 text-sm">{errors.consent.message}</p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Отправить
              </button>
            </form>
          ) : (
            // 📌 Success state
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-lg font-medium text-green-600 mb-2">
                Заявка отправлена!
              </p>
              <p className="text-sm text-muted-foreground">
                Мы свяжемся с вами в ближайшее время
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
