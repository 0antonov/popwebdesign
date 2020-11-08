<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/page/{slug}", name="page")
     */
    public function page(string $slug): Response
    {
        return $this->render('index/'.$slug.'.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
}
