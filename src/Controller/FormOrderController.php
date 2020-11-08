<?php

namespace App\Controller;

use App\Entity\Order;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\RadioType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\UrlType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormOrderController extends AbstractController
{
    /**
     * @Route("/form/order", name="form_order")
     */
    public function new(Request $request)
    {
        // creates a task object and initializes some data for this example
        $order = new Order();

        $form = $this->createFormBuilder($order)
            ->add('name', TextType::class)
            ->add('email', EmailType::class)
            ->add('companyName', TextType::class)
            ->add('phoneNumber', NumberType::class)
            ->add('website', UrlType::class)
            ->add(
                'publishAfterDone',
                ChoiceType::class,
                [
                    'choices' => [
                        'Yes' => 1,
                        'No' => 0,
                    ],
                    'expanded' => true
                ]
            )
            ->add('save', SubmitType::class, ['label' => 'Send'])
            ->getForm();

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $form->getData() holds the submitted values
            // but, the original `$task` variable has also been updated
            $task = $form->getData();

            dump($task);
            // ... perform some action, such as saving the task to the database
            // for example, if Task is a Doctrine entity, save it!
            // $entityManager = $this->getDoctrine()->getManager();
            // $entityManager->persist($task);
            // $entityManager->flush();

//            $form->
        }



        return $this->render('index/narucivanje.html.twig', [
            'form' => $form->createView(),
            'success' => $request->get('result', null) == 'success'
        ]);
    }
}
